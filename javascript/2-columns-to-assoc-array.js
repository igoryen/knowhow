Convert this:

Matthew	28
Mark	16
Luke	24
John	21

To this:

{ name: "Matthew", chapters: 28 },
{ name: "Mark", chapters: 16 },
{ name: "Luke", chapters: 24 },
{ name: "John", chapters: 21 },


Find what:
(^[0-9]*[a-zA_Z ]+)\t(\d+)
Replace with:
{ name: "$1", chapters: $2 },