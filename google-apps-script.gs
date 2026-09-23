const SPREADSHEET_ID = '1vKi-rCx82XhvXF1_KKHcPGNuNYYA8Df76w5TFcmPYNU'
const GEMINI_API_KEY = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY')
const SHEET_HEADERS = ['Received', 'Name', 'Mobile', 'Service', 'Project stage', 'Brief', 'Source', 'AI Summary']

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, connection: 'Veltriqlabs leads' }))
    .setMimeType(ContentService.MimeType.JSON)
}

function getLeadSheet() {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0]

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(SHEET_HEADERS)
  }

  return sheet
}

function generateAiSummary(service, stage, brief) {
  if (!GEMINI_API_KEY) {
    return ''
  }

  try {
    const prompt = `You are a sales intake assistant for a consulting business. Summarize the inquiry in 2-3 sentences and identify the likely need, stage, and next action.\n\nService: ${service}\nStage: ${stage}\nBrief: ${brief}`
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`
    const payload = {
      contents: [{
        role: 'user',
        parts: [{ text: prompt }]
      }],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 200
      }
    }

    const response = UrlFetchApp.fetch(url, {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    })

    if (response.getResponseCode() !== 200) {
      return ''
    }

    const json = JSON.parse(response.getContentText())
    return json?.candidates?.[0]?.content?.parts?.map((part) => part.text).join('\n') || ''
  } catch (error) {
    console.error('Gemini summarization failed:', error)
    return ''
  }
}

function doPost(event) {
  const sheet = getLeadSheet()
  const data = JSON.parse(event.postData.contents)
  const name = String(data.name || '').trim()
  const mobile = String(data.mobile || data.mobileNumber || data.phone || '').trim()

  if (!name || !mobile) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: 'Name and mobile are required.' }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  const aiSummary = generateAiSummary(data.service || '', data.stage || '', data.brief || '')

  sheet.appendRow([
    new Date(),
    name,
    mobile,
    data.service || '',
    data.stage || '',
    data.brief || '',
    data.source || 'Veltriqlabs website',
    aiSummary || 'No AI summary generated'
  ])

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, aiSummary }))
    .setMimeType(ContentService.MimeType.JSON)
}
