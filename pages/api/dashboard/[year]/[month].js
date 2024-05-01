import { createClient } from '@supabase/supabase-js';
import { google } from 'googleapis';

// @ts-ignore
import keys from 'key';

export default async function handler(req, res) {
  try {
    const supabaseAccessToken = req.headers['supabase-access-token'];
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY,
      {
        global: {
          headers: {
            Authorization: `Bearer ${supabaseAccessToken}`,
          },
        },
      },
    );
    const { data: user, error } = await supabase.from('users').select('*');

    if (error || !user) {
      return {
        redirect: {
          destination: '/login',
          permanent: true,
        },
      };
    }

    const userData = user[0];

    if (!userData.available_budgets) {
      // TODO: Add return with a redirect to the budget configuration page
    }

    const client = new google.auth.JWT(
      keys.client_email,
      null,
      keys.private_key,
      ['https://www.googleapis.com/auth/spreadsheets'],
    );

    client.authorize(async function (err, tokens) {
      if (err) {
        return res.status(400).send(JSON.stringify({ error: true }));
      }

      const gsapi = google.sheets({ version: 'v4', auth: client });

      const opt = {
        spreadsheetId: '12V6z1jS29EaYQcfvguEb0t4GqzEtPsQP5CRmfKRZoSs',
        range: 'JanuarySummary!B22:F36',
      };

      let expenses = await gsapi.spreadsheets.values.get(opt);

      const transactionList = {
        spreadsheetId: '12V6z1jS29EaYQcfvguEb0t4GqzEtPsQP5CRmfKRZoSs',
        range: 'JanuaryTransactions!B22:F36',
      };

      const wholeSheetOpt = {
        spreadsheetId: '12V6z1jS29EaYQcfvguEb0t4GqzEtPsQP5CRmfKRZoSs',
      };

      const wholeSheet = await gsapi.spreadsheets.get(wholeSheetOpt);

      return res.status(400).send(
        JSON.stringify({
          error: false,
          data: { expenses: expenses.data.values, whole: wholeSheet },
        }),
      );
    });
  } catch (e) {
    return res
      .status(400)
      .send(JSON.stringify({ error: true, message: e.message }));
  }
}
