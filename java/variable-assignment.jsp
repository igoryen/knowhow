in aaa.jsp

<c:set var="the_number"><%=ScotiaTranslation.getTranslation(language, "Client Account #")%></c:set>

<h1>${the_number}</h1>


<% if (language.equals("English")) { %>
	<c:set var="nas_req_num_title">NAS request number</c:set>
<% } else { %>
	<c:set var="nas_req_num_title">Numéro de référence NAS</c:set>
<% } %>