Create modules:

	Custom fields > Custom fields > 
	> Add new Field Group: "Core Modules" 
	> Field label: "Flexible Content" >
	> Field type > "Flexible Content" >
	// "Show this field group if" > Page is equal to About us.

		> Layout > Add new
		> Label > "Image Text Overlay" > // Layout 1

		> Add Field > // add the first field
		> Field Label: "Background Image" >
		> Field type: Image >
		> Close field

		> Add field > // add the second field
		> Field Label: "Overlay Text" >
		> Field type: Text >
		> Close field

		> Publish



	Custom fields > 
		> "Core Modules" > 
		> Layout > Add new > 
		> Label > "Image and Text Block" >  // Layout 2

		> Add field > "Featured Image"
		> Field type: Image >
		> Close field

		> Add field > "Description text"
		> Field type: Wysiwyg Editor >
		> Close field



		> Layout > Add new > 
		> Label > "Callout Blocks" > // Layout 3

		> Add field >
		> Field Label: "Block Collection" >
		> Field Type: Repeater >
		> Maximum Rows: 3 > 
		> Layout: Block > 


			> Sub Fields > Add Field

			> Field Label: "Block Image" > 
			> Field Type: Image >
			> Close Field


			> Sub Fields > Add Field
			> Field Label: "Block Text" > 
			> Field Type: Text >
			> Close Field




	Pages > your page > 
		> "Core Modules" group > 
		> Add Layout > "Image Text Overlay" > 
		> Background image > Add image > Upload Files > Select Image > Select
		> Overlay text > "Overlay Headline"
		
		> Add Layout > "Image and Text Block" > 
		> "Featured Image" > Add image > Upload Files > Select Image > Select
		> "Description Text" > [add a few lines with newlines]

		> Add Layout > "Callout Blocks"

			> Add Row > 
			> "Block Image" > Add image > Upload Files > Upload 3 Images > Pick #1 > Select
			> "Block Text" > "Light bulb"

			> Add Row > 
			> "Block Image" > Add image > Upload Files > Pick #2 > Select
			> "Block Text" > "Fan"

			> Add Row > 
			> "Block Image" > Add image > Upload Files > Pick #2 > Select
			> "Block Text" > "Dino"

		> Publish > View page