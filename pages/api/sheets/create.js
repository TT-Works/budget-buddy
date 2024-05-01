/* eslint-disable quotes */
import { google } from 'googleapis';
// @ts-ignore
import keys from 'key';
// TODO: Copy template with DRIVE API, give it a name and give permissions to the user
export default function handler(req, res) {
  try {
    const client = new google.auth.JWT(
      keys.client_email,
      null,
      keys.private_key,
      [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
      ],
    );

    client.authorize(async function (err, tokens) {
      if (err) {
        return res.status(400).send(JSON.stringify({ error: true }));
      }

      const gsapi = google.sheets({ version: 'v4', auth: client });
      const driveapi = google.drive({ version: 'v3', auth: client });
      const permissionIds = [];

      // @ts-ignore
      const responseOne = await gsapi.spreadsheets.create(request);
      // @ts-ignore
      const spreadsheetId = responseOne.data.spreadsheetId;

      const permission = {
        type: 'user',
        role: 'writer',
        emailAddress: 'tsvetislavt99@gmail.com',
      };

      const result = await driveapi.permissions.create({
        // @ts-ignore
        resource: permission,
        fileId: spreadsheetId,
        fields: 'id',
      });

      // @ts-ignore
      permissionIds.push(result.data.id);
      // @ts-ignore
      console.log(`Inserted permission id: ${result.data.id}`);
      // @ts-ignore
      const response = await gsapi.spreadsheets.create(request);
      return res.status(200).json({
        // @ts-ignore
        spreadsheetId: response.data.spreadsheetId,
      });
    });
  } catch (e) {
    console.log('oh noo');
    return res
      .status(400)
      .send(JSON.stringify({ error: true, message: e.message }));
  }
}
