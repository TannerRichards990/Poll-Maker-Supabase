const SUPABASE_URL = 'https://mtegvpmustvqjcrpqjft.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10ZWd2cG11c3R2cWpjcnBxamZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2MzgyMTYsImV4cCI6MTk3NTIxNDIxNn0.1qATbqaxyJY3HmYMZsX0LcLV6_XXcgd_qnE96O4JeR8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createNewPoll(data) {
    const response = await client.from('poll-list').insert(data);
    return response.data;
}

export async function getPolls() {
    const response = await client.from('poll-list').select('*');
    return response.data;
}