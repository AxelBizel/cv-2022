// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function fetchData(pageName) {
  const spreadSheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const baseUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadSheetId}/values/${pageName}?alt=json&key=${apiKey}`;
  const rawData = await fetch(baseUrl);
  const dataRes = await rawData.json();
  const data = dataRes.values;
  data?.splice(0, 1);
  return data;
}
