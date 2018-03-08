format html when it has tag attributes on new lines (annoying!)

Find what:
([^>])([\t ]*\n[\t ]*)([ ]*)([^<])
Replace with:
$1 $4