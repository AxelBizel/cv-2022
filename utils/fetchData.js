export const fetchData = async (pageName) => {
  const spreadSheetId = process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID;
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const rawData = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadSheetId}/values/${pageName}?alt=json&key=${apiKey}`
  );
  const dataRes = await rawData.json();
  const data = dataRes.values;
  data.splice(0, 1);
  return data;
};
