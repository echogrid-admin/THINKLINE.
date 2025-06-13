// Initialize Supabase
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Load dynamic content based on URL
async function loadPage() {
  const slug = window.location.pathname.split('/').pop() || 'home';
  
  const { data } = await supabase
    .from('pages')
    .select('*')
    .eq('slug', slug)
    .single();

  if (data) {
    document.getElementById('content').innerHTML = `
      <h1>${data.title}</h1>
      <div>${data.content}</div>
    `;
  }
}

// Load page on startup
loadPage();