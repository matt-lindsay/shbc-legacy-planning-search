# Legacy Planning Search Tool

## Surrey Heath Borough Council

[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/matt-lindsay/matt-lindsay%2Fshbc-legacy-planning-search%2Fshbc-legacy-planning-search?branch=master&key=eyJhbGciOiJIUzI1NiJ9.NTkyMmNhNmE4Mjk3MDcwMDAxN2VmMGJk.69DGdPuj7zi_3MUuJJY0Vnhh_tlbOgeQ3S4licUFc7M&type=cf-1)]( https://g.codefresh.io/pipelines/shbc-legacy-planning-search/builds?repoOwner=matt-lindsay&repoName=shbc-legacy-planning-search&serviceName=matt-lindsay%2Fshbc-legacy-planning-search&filter=trigger:build~Build;branch:master;pipeline:59493b8304fb1c0001591fc9~shbc-legacy-planning-search)

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