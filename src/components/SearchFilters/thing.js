state={
    card: JSON.parse(localStorage.getItem("selectedDog"))
 }
 
 render(){
    return(
      <div>
         <img src={this.state.card.image}
              alt={this.state.card.name}
              className="img-fluid img-thumbnail rounded indvCard bg-dark"
         />
      </div>
    )
 }