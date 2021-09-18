export function distance(coord1, coord2) {
  if (!(coord1 && coord2)) return;
  var p = 0.017453292519943295; // Math.PI / 180
  var c = Math.cos;
  var a =
    0.5 -
    c((coord2.latitude - coord1.latitude) * p) / 2 +
    (c(coord1.latitude * p) *
      c(coord2.latitude * p) *
      (1 - c((coord2.longitude - coord1.longitude) * p))) /
      2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}
