const maxmind = require('../lib');

function extract(lookup) {
  return (lookup?.country?.iso_code ?? lookup?.registered_country?.iso_code);
}

(async () => {
  const lookup = await maxmind.open('./GeoLite2-Country.mmdb');

  console.log(extract(lookup.get('66.6.44.4')));
  console.log(extract(lookup.get('93.174.90.77')));
  console.log(extract(lookup.get('104.18.40.47')));
  console.log(extract(lookup.get('172.67.193.36')));
  console.log(extract(lookup.get('104.16.233.240')));
  console.log(extract(lookup.get('34.240.204.5')));
})();
