# Digital Methods Accelerator (draft)

This repository hosts the Digital Methods Accelerator toolkit. Access the toolkit on GitHub Pages at
`https://<owner>.github.io/digital-methods-accelerator/` (replace `<owner>` with the GitHub org or user that owns this repo - probably the Sussex Humanities Lab).

## Editing content

Edit the markdown files in the `./content` folder. The build pipeline automatically renders them to HTML.

## Local development

This project uses [Jekyll](https://jekyllrb.com/) to generate a static site.

1. Install dependencies (requires Ruby):
   ```bash
   bundle install
   ```
2. Build the site:
   ```bash
   bundle exec jekyll build
   ```
3. Run a local server:
   ```bash
   bundle exec jekyll serve
   ```

The output is generated in the `_site` directory.

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages on every push to `main` (and can be triggered manually). The workflow is defined in `.github/workflows/deploy.yml`.

The [Digital Humanities Climate Coalition](https://www.cdcs.ed.ac.uk/digital-humanities-climate-coalition) is a collaborative and cross-institutional initiative focused on understanding and minimising the environmental impact of DH research. Participants are based at HE institutions and DH Centres across the UK, Ireland, and Northern Europe.
