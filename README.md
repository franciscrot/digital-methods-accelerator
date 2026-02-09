# Digital Methods Accelerator (draft)

I used the DHCC toolkit (special thank-you to Marty!) to get this one started. Access the toolkit on GitHub Pages at
`https://<owner>.github.io/digital-methods-accelerator/` (replace `<owner>` with the GitHub org or user that owns this repo - probably the Sussex Humanities Lab).

*Editing content*

Edit the markdown files in the `./content` folder. Commit your changes to the repository, then visit the [Publish to Github pages action](https://github.com/franciscrot/digital-methods-accelerator/actions/workflows/main.yml) and manually run the workflow to publish changes.

*Software requirements*

Copied over from Marty's original notes. This site uses the [Hugo CMS](https://gohugo.io), the [hugo-book](https://themes.gohugo.io/themes/hugo-book/) theme, and github actions to build and publish the site on GitHub pages.

The hugo site configuration is in the [`config.yaml`](https://github.com/franciscrot/digital-methods-accelerator/blob/main/config.yaml) file. This contains theme specific parameters and some general hugo configuration settings.

The repository is configed to serve the site from the `gh-pages` branch of the repository. The actions are configured in the `.github/workflows/main.yml` file to build and commit HTML output to that branch. The main action must be triggered manually. 

The GitHub action depends on three external actions from the GitHub marketplace: [the GitHub Checkout action](https://github.com/actions/checkout) to checkout the repo into the action's temporary container, [peaceiris' Hugo actions](https://github.com/peaceiris/actions-hugo) to install Hugo and build the site inside the container, and [Peaceiris' GitHub Pages actions](https://github.com/peaceiris/actions-gh-pages) to put the built HTML content into the gh-pages branch of the repository where it can be hosted publically online.

The [Digital Humanities Climate Coalition](https://www.cdcs.ed.ac.uk/digital-humanities-climate-coalition) is a collaborative and cross-institutional initiative focused on understanding and minimising the environmental impact of DH research. Participants are based at HE institutions and DH Centres across the UK, Ireland, and Northern Europe.
