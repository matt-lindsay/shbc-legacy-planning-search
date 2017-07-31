# Legacy Planning Search Tool

## Surrey Heath Borough Council

[![Codefresh build status]( https://g.codefresh.io/api/badges/build?repoOwner=matt-lindsay&repoName=shbc-legacy-planning-search&branch=master&pipelineName=shbc-legacy-planning-search&accountName=matt-lindsay&type=cf-1)]( https://g.codefresh.io/repositories/matt-lindsay/shbc-legacy-planning-search/builds?filter=trigger:build;branch:master;service:59493b8304fb1c0001591fc9~shbc-legacy-planning-search)


#### To Do

- Address / History Card APIs need to be unlimited (Debian end).
- Documentation code base
- Documentation app usage
- Documentation environment variables
- Front end Enter Pla Case # to return Box link, 
  1. submit to either get the document if redacted....
  2. ...or send the document for redaction.
  3. How to store links to Planning History in Box?
    - MongoDb
    - JSON file

#### Notes

- Leaflet map markers are hard coded into markers.js for speed reasons
- leaf-demo.js would not minify due to ticks in wms attribution