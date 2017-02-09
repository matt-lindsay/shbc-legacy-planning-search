/* bloodhound-remote.js */
var addresses = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('caption'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: './js/address.json',
    remote: {
        url: './Api/AddressSearch?search=%QUERY',
        wildcard: '%QUERY'
    }
});

$('#remote .typeahead').typeahead(null, {
    name: 'best-pictures',
    display: 'caption',
    source: addresses
});