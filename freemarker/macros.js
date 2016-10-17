	<#macro video_link src videoTitle gaLabel="">
	    <a class="video_thumb ga_link" 
	       data-src="#${src}" 
	       data-category="P&S" 
	       data-action="Click" 
	       data-label="${gaLabel}" 
	       data-title="${videoTitle}">
	       <img src="<@media '/media/chrome/video_icon_small.png' />" class="video-icon" /> ${videoTitle}
	    </a>
	</#macro>

	<#assign available_videos="Available Videos" />

	<div 
		class="video_thumb ga_link" 
		data-src="#<#if locale == "fr">I8fvqLn2XmY<#else>X2eu52Zo5SM</#if>" 
		data-category="P&S" 
		data-action="Click" 
		data-label="P&S_Maintenance_Inside_Look_Tires_Choosing_Storing_Tires_Video" 
		data-title="<#if locale == "fr">Inspection du véhicule et permutation des pneus<#else>Vehicle Inspection and Tire Rotation</#if>">
		<span class="video_icon right top">&nbsp;</span>
	</div>

	<div class="video_links">
		<h3 class="head_5">${available_videos}</h3>
		<#if locale == "fr">
			<@video_link "I8fvqLn2XmY" "Inspection du véhicule et permutation des pneus" "P&S_Maintenance_Maintenance_Schedule_Vehicle_Inspection_Video" />
		<#else>
			<@video_link "X2eu52Zo5SM" "Vehicle Inspection and Tire Rotation" "P&S_Maintenance_Maintenance_Schedule_Vehicle_Inspection_Video" />
		</#if>
	</div>



	<div class="video_links">
		<h3 class="head_5">${available_videos}</h3>
		<#if locale == "fr">
			<@video_link "jwPVdmgig1g" "Huile de moteur synthétique d'origine Lexus" "P&S_Maintenance_Inside_Look_Oil_Filters_Synthetic_Oil_Video" />
			<@video_link "cr05C-8FdwQ" "Huile moteur d'origine du fabricant et filtre à huile" "P&S_Maintenance_Inside_Look_Oil_Filters_Manufacturer_Motor_Oil_Video" />
		<#else>
			<@video_link "sNJhACABTss" "Lexus Genuine Synthetic Motor Oil" "P&S_Maintenance_Inside_Look_Oil_Filters_Synthetic_Oil_Video" />
			<@video_link "ybeX3o11LD8" "Manufacturer’s Genuine Motor Oil and Oil Filters" "P&S_Maintenance_Inside_Look_Oil_Filters_Manufacturer_Motor_Oil_Video" />
		</#if>
	</div>