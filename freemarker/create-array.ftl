http://stackoverflow.com/questions/5512991/adding-values-in-simplesequence-freemarker

<#assign hybrid = [2, 3, 8, 11, 12, 14, 15, 18, 19, 20] />

<#assign gallery_captions =[] />

<#list 1..20 as i> // for ( var i = 1; i <= 20; i++) {...}
    <#if hybrid?seq_contains(i)> // if array 'hybrid' contains the current value of i
        <#assign gallery_captions = gallery_captions + ["LC 500h"] />
    <#else>
        <#assign gallery_captions = gallery_captions + ["LC 500"] />
    </#if>
</#list>

<#assign gallery_assets = [] />
<#list 1..20 as i>
    <#assign gallery_assets = gallery_assets + [{"image" : image_path+"lc_500/gallery/lc500_gallery${i}", "caption" : gallery_captions[i-1], "type" : "image"}] />
</#list>