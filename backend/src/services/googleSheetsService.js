const { sheets } = require('../config/google-sheets');
const spreadsheetId = process.env.GOOGLE_SHEET_ID;
const sheetName = process.env.GOOGLE_SHEET_TAB_NAME;

const getData = async () => {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: sheetName,
  });
  return response.data.values;
};

const appendData = async (values) => {
  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: sheetName,
    valueInputOption: 'RAW',
    resource: { values },
  });
  return response.data;
};

module.exports = { getData, appendData };
