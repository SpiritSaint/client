module.exports = {
    openHandler: function () {
        console.log("Client create a new connection...");

        this.send("Thanks for welcome...", {}, () => {});
    },
    messageHandler: function (data) {
        console.log("Client receive a new message: ", data);
    },
    errorHandler: function (err) {
        switch (err.code) {
            case "ECONNREFUSED":
                console.log("Server connection refused...");
                break;
        }
    },
    closeHandler: function () {
        console.log("Client closed...");
    }
};