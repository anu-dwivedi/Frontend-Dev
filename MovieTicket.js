class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function() {
  console.log(`Ticket: ${this.movieName}, Seat: ${this.seatNo}, Price: ₹${this.price}`);
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

const oTicket = new OnlineTicket("Tiger 3", "B21", 300, 50);
console.log("Total Amount:", oTicket.getTotalAmount());
oTicket.printTicket(); // inherits from MovieTicket.prototype
