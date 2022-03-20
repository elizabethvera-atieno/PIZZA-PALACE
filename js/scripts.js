var sizePrice , crustPrice ;

// Constructor Pizza
function Pizza(flavor,size,crust,topping, total){
    this.flavor = flavor;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}
$(document).ready(function(){
    $("form#form").submit(function(event){
        event.preventDefault();
        $("button.proceed").click(function(){
            let pflavor = $("#flavor option:selected").val();
            let psize = $("#size option:selected").val();
            let pcrust = $("#crust option:selected").val();
            let ptopping = [];
            $.each($("input[name='toppings']:checked"), function(){            
                ptopping.push($(this).val());
            });
            console.log(pcrust)
            switch(psize){
                case "0":
                  sizePrice =0;
                break;
                case "large":
                   sizePrice = 1200;
                //    console.log(sizePrice);
                 break;
                 case "medium":
                    sizePrice = 900;
                //    console.log(sizePrice);
                 break;
                 case "small":
                    sizePrice = 600;
                //    console.log(sizePrice);
                 default:
                   console.log("error"); 
            };
            switch(pcrust){
                case "0":
                    crustPrice = 0;
                break;
                case "crispy":
                    crustPrice= 250;
                    // console.log(crustPrice);
                break;
                case "stuffed":
                    crustPrice = 200;
                break;
                case "gluten-free":
                    crustPrice = 230;
                break;
                default:
                  console.log("No price"); 
            };
            let toppingPrice = ptopping.length*70;
            console.log("toppings price" + toppingPrice);
            if((psize === "0" )|| (pcrust ==="0")){
                $("div#options").hide();
              return  alert("Ensure you have selected both crust and size!!")
            }else{
                $(".proceed").hide();
                $("div#options").fadeIn();
                // $("#information").hide();
            };
            let total = sizePrice + crustPrice + toppingPrice
            console.log(total)

            $("#pizzaflavor").html($("#flavor option:selected").val());
            $("#pizzasize").html($("#size option:selected").val());
            $("#pizzacrust").html($("#crust option:selected").val());
            $("#pizzatopping").html(ptopping.join(" , "));
            $("#totals").html(total);

            var addOrder = new Pizza(pflavor, psize, pcrust, ptopping, total)
            var total2 = parseInt(addOrder.total)
            let ovaralTotal = total + total2
            // add pizzza
            $("button.addPizza").click(function(){
                $("#ordersmade").append("<tr><td> " + addOrder.flavor + "</td><td> " + addOrder.size + "</td><td> " + addOrder.crust + "</td><td> " + addOrder.topping + "</td><td> " + addOrder.total + '</td></tr>');
            });

            // check out
            $("button.checkout").click(function(){
                $("button.addPizza").hide();
                $("button.checkout").hide();
                $("#overalBill").html("Thank you for ordering. Your total bill is " + ovaralTotal + "." );
            });

            // delivery
            $("button.delivery").click(function(){
                alert("The delivery will be sh 200");
                // prompt("Please enter address of delivery");
                let address = prompt("Please enter address of delivery");
                if (address !== null){
                    alert("Thank you for odering. You pizza willbe delivered to " + address)
                }else{
                    prompt("Ensure you've entered address os delivery!")
                };

            });

        });
    });
});