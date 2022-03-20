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
        });
    });
});