/**
 * Handlers
 */
module.exports = {
    /**
     * This handler will be executed when client make connection with the server
     */
    openHandler: function () {
        console.log("Client create a new connection...");

        this.send("Thanks for welcome...", {}, () => {});
    },
    /**
     * This handler will be executed when client receive a message from the server
     * @param data
     */
    messageHandler: function (data) {
        console.log("Client receive a new message: ", data);
    },
    /**
     * This handler will be executed when client emmit an error event
     * @param err
     */
    errorHandler: function (err) {
        switch (err.code) {
            case "ECONNREFUSED":
                console.log("Server connection refused...");
                break;
        }
    },
    /**
     * This handler will be executed when client emmit an close event
     */
    closeHandler: function () {
        console.log("Client closed...");
    }
};