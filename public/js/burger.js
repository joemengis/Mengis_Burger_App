$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then( function() {
            console.log("New burger added!");
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        let id = $(this).data("id");
        let devouredState = {devoured: 1};
        console.log("burger id is: ", id);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger eaten");
            location.reload();
        });
    });
    // $("#trashbutton").on("click", function(event){
    //     event.preventDefault();
    //     console.log("recycle button pushed!");
    //     let id = $(this).data("id");

    //     $.ajax({
    //         type: "DELETE",
    //         url: "/api/burgers/" + id
    //     }).then(location.reload());
    // });
});

