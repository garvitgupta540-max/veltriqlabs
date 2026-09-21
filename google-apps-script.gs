const SHEET_NAME = 'Consultations'
const GEMINI_API_KEY = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY')

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
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME) || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME)
  const data = JSON.parse(event.postData.contents)

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Received', 'Service', 'Project stage', 'Brief', 'Source', 'AI Summary'])
  }

  const aiSummary = generateAiSummary(data.service || '', data.stage || '', data.brief || '')

  sheet.appendRow([
    new Date(),
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
