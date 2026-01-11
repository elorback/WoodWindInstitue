# to generate project and deploy to cloudflare

create files

/public/\_redirects >> /\* /index.html 200

/wrangler.toml >>
name = "project_name"
compatibility_date = "date_created"

pages_build_output_dir = "dist" <-- do not change this is automated with vite build

in package.json scripts look like this:

"scripts": {
"dev": "vite",
"build": "vite build",
"lint": "eslint .",
"preview": "vite preview"
},

run commands

npm run build
npx wrangler pages deploy
