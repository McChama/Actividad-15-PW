$(document).ready(function(){
    /* HTML */
    $("#Tarea").text("Programación para Web");
    $("#GradoGrupo").text("Salon 5to. A");
    $("#Profe").html("Profesor: <strong>José Nabor Ramírez Morfin</strong>");
    $("#TituloTabla").html("<strong>Listado de alumnos</strong>");
    $("#Pie").html("<p>&copy;<strong>Desarrollado</strong> por <a target='_blank' href='https://github.com/McChama'>Emiliano Vázquez Banda</a></p>");

    /* CSS */
    $("li:nth-child(odd)").css("background","rgba(195, 195, 193, 1)");

    /* Eventos */
    $("li").mouseover(function(){
        Color = $(this).css("background-color");
        $(this).css({"background":"yellow","cursor":"pointer"});
    })
    $("li").mouseout(function(){
        $(this).css("background", Color);
    })
    $("li").click(function(){
        $("#datos").html("<p><strong>Resultado: </strong> <span>"+$(this).text()+"</span></p>");
        $("span").css("color","white");
        $("#datos").css("background","green");
    })
});