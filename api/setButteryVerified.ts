import { GoogleSpreadsheet } from 'google-spreadsheet';
const { CLIENT_EMAIL, PRIVATE_KEY } = process.env;
// Initialize the sheet - doc ID is the long id in the sheets URL
const doc = new GoogleSpreadsheet(
  '1NZyxbnUMkChmZC3umrW8vJdyus6PdPyRq8GbDLZiglU'
);

// In the row where the "id" column matches "id", set the "verified" column to "OPEN"
export async function setButteryVerified(
  id: string,
  verifiedValue: 'OPEN' | 'CLOSED'
) {
  // Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL ?? '',
    private_key: PRIVATE_KEY ?? '',
  });

  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  const rows = await sheet.getRows(); // can pass in { limit, offset }
  rows.forEach((row) => {
    if (row.id === id) {
      row.verified = verifiedValue;
      row.save();
    }
  });
}
