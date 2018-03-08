Tag A
	/src/com/visionmax/workflow/tag/html/TreeTag.java

		package com.visionmax.workflow.tag.html;
		public class TreeTag extends TagSupport {...}

	/WEB-INF/workflow.tld
	<taglib>
	    <tlibversion>2.0</tlibversion>
	    <jspversion>1.2</jspversion>
	    <shortname>Visionx Workflow</shortname>
	    <uri>urn:www.visionmax.com/projects/workflow</uri>

	    <!-- These tags are for the Tree Tag -->
	    <tag>
	        <name>tree</name>
	        <tagclass>com.visionmax.workflow.tag.html.TreeTag</tagclass>
	        <bodycontent>JSP</bodycontent>

	        <attribute>
	            <name>tree</name>
	            <required>true</required>
	            <rtexprvalue>true</rtexprvalue>
	        </attribute>

	     </tag>

	</taglib>


	/WebContent/jsp/web/MyForms.jsp
		<%@ taglib uri="/WEB-INF/workflow.tld" prefix="workflow" %>

		<workflow:tree tree="<%=workflow_forms%>"/>

Tag B
	/wrc/com/nas/app/igoryen/tag/html/HelloTag.java
		package com.nas.app.igoryen.tag.html;
		public class HelloTag extends TagSupport {...}

	/WEB-INF/igoryen.tld

		<taglib>
		   <tlibversion>2.0</tlibversion>
	    	<jspversion>1.2</jspversion>
		   <shortname>Example TLD</shortname>
		   
		   <tag>
		      <name>Hello</name>
		      <tagclass>com.nas.app.igoryen.tag.html.HelloTag</tagclass>
		      <bodycontent>JSP</bodycontent>
		   </tag>
		</taglib>

	/ WebContent/NAS?SB/RequestForm.jsp
		<%@ taglib uri="/WEB-INF/igoryen.tld" prefix="ex" %>


		<ex:Hello/>