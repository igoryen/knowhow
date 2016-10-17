replaced A with B 

A:
<!-- <#assign gallery_assets = [
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery1", "caption" : gallery_captions[0], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery2", "caption" : gallery_captions[1], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery3", "caption" : gallery_captions[2], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery4", "caption" : gallery_captions[3], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery5", "caption" : gallery_captions[4], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery6", "caption" : gallery_captions[5], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery7", "caption" : gallery_captions[6], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery8", "caption" : gallery_captions[7], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery9", "caption" : gallery_captions[8], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery10", "caption" : gallery_captions[9], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery11", "caption" : gallery_captions[10], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery12", "caption" : gallery_captions[11], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery13", "caption" : gallery_captions[12], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery14", "caption" : gallery_captions[13], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery15", "caption" : gallery_captions[14], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery16", "caption" : gallery_captions[15], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery17", "caption" : gallery_captions[16], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery18", "caption" : gallery_captions[17], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery19", "caption" : gallery_captions[18], "type" : "image"},
    {"image" : "/media/content/catalogue/gs/2016/gallery/gallery20", "caption" : gallery_captions[19], "type" : "image"}
]/> -->

B:
<#assign gallery_assets = [] />

<#list gallery_captions as item>
    <#assign gallery_assets = gallery_assets + [
        {"image" : "/media/content/catalogue/gs/2016/gallery/gallery${item_index + 1}", 
        "caption" : gallery_captions[item_index], 
        "type" : "image"}
    ] />
</#list>

