---
title: Home
weight: 1
permalink: /toolkit/index.html
---

# Digital Methods Accelerator

## Site index

The table below links to every area in the Accelerator and lists the associated practices so the content can be filled in later.

| Strand | Area | Examples |
| --- | --- | --- |
| Core DH Skills | [Coding foundations](core-dh-skills.html#coding-foundations) | Intro to coding (Python) |
| Core DH Skills | [Data work](core-dh-skills.html#data-work) | Data wrangling; metadata; digital forensics |
| Core DH Skills | [Text & cultural analytics](core-dh-skills.html#text-cultural-analytics) | Topic modelling; embeddings |
| Core DH Skills | [Networked culture](core-dh-skills.html#networked-culture) | Network analysis |
| Core DH Skills | [Digital collections](core-dh-skills.html#digital-collections) | Creating digital collections; digitisation workflows |
| Core DH Skills | [Web methods](core-dh-skills.html#web-methods) | Web scraping; APIs |
| Core DH Skills | [Physical computing](core-dh-skills.html#physical-computing) | Raspberry Pis; sensors |
| Core DH Skills | [Visual methods](core-dh-skills.html#visual-methods) | Data visualisation; exploratory vs explanatory graphics |
| Core DH Skills | [Development foundations](core-dh-skills.html#development-foundations) | Collaborating on GitHub |
| Core DH Skills | [Spatial](core-dh-skills.html#spatial) | GIS for humanities |
| Core DH Skills | [Digitisation](core-dh-skills.html#digitisation) | Digitisation, image to text, OCR |
| Core DH Frames | [Critical lenses](core-dh-frames.html#critical-lenses) | Feminist, queer, decolonial, anti-racist approaches |
| Core DH Frames | [Accessibility](core-dh-frames.html#accessibility) | Accessibility; critical disability studies |
| Core DH Frames | [Data lifecycle](core-dh-frames.html#data-lifecycle) | E.g. acquire / transform / analyse / present / sustain |
| Core DH Frames | [Formats, standards, etc.](core-dh-frames.html#formats-standards) | XML, JSON / Python, XSLT / SQL, SPARQL / TEI, IIIF |
| Core DH Frames | [AI critique](core-dh-frames.html#ai-critique) | AI refusal, resistance, and abolition |
| Core DH Frames | [Climate and environment](core-dh-frames.html#climate-environment) | Digital sustainability |
| Core DH Frames | [What is tech?](core-dh-frames.html#what-is-tech) | Intro to the tech sector; political economy of tech |
| Core DH Frames | [Intro to stats](core-dh-frames.html#intro-to-stats) | Humanities data science |
| Research Practice | [Open research](research-practice.html#open-research) | Open research; open data; open software |
| Research Practice | [Intro to experiments](research-practice.html#intro-to-experiments) | Randomization, bias, controls & blocking, factorial interaction |
| Research Practice | [Intro to fieldwork](research-practice.html#intro-to-fieldwork) | Interviews, coding |
| Research Practice | [Data governance](research-practice.html#data-governance) | GDPR; privacy; consent; data protection |
| Research Practice | [Ethics & risk](research-practice.html#ethics-risk) | Research ethics; risk assessment; institutional review |
| Research Practice | [Preservation](research-practice.html#preservation) | Digital preservation; archiving; stewardship |
| Research Practice | [IP & reuse](research-practice.html#ip-reuse) | Copyright; licensing; reuse |
| Digital Media and Arts | [Creative coding](digital-media-arts.html#creative-coding) | CSS + HTML + JS; in-browser games |
| Digital Media and Arts | [Games & narrative](digital-media-arts.html#games-narrative) | Twine; intro to game design; intro to Unity |
| Digital Media and Arts | [Making & materiality](digital-media-arts.html#making-materiality) | 3D printing; soldering; code textiles |
| Digital Media and Arts | [Design](digital-media-arts.html#design) | Speculative design, design thinking, prototyping |
| Digital Media and Arts | [Security](digital-media-arts.html#security) | Intro to cybersecurity |
| Digital Media and Arts | [Media archaeology](digital-media-arts.html#media-archaeology) | Digital forensics, recovery from obsolete media |
| Critical AI Practice | [Intro to making AI](critical-AI-practice.html#intro-to-making-ai) | RAG methods, risks, and harms |
| Critical AI Practice | [Carbon estimation](critical-AI-practice.html#carbon-estimation) | CodeCarbon |
| Critical AI Practice | [Distance reading](critical-AI-practice.html#distance-reading) | AI summation methods, risks, and harms |
| Critical AI Practice | [AI era media literacy](critical-AI-practice.html#ai-era-media-literacy) | Identifying genAI content |

## SHL Digital



## Software requirements

We have tried to use minimal software dependencies, a lightweight theme with simple HTML/CSS and github's own actions as the site's hosting infrastructure.

This site uses the Hugo CMS, the hugo-book theme, and github actions to build and publish the site on GitHub pages.

The hugo site configuration is in the config.yaml file. This contains theme specific parameters and some general hugo configuration settings.

The repository is configed to serve the site from the gh-pages branch of the repository, and the actions are configured in the .github/workflows/main.yml file to build and commit HTML output to that branch.

The main action must be triggered manually. This is to control/minimise the amount of devops actions container setup time the site uses.

The github action depends on 3 external actions from the Github marketplace: the github checkout action to checkout the repo into the action's temporary container, peaceiris' hugo actions to install hugo and build the site inside the container, and peaceiris' github pages actions to put the built HTML content into the gh-pages branch of the repository where it can be hosted publically online.

[Visit the project on GitHub](https://github.com/digital-methods-accelerator/digital-methods-accelerator)
