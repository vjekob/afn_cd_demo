module.exports = async function (context, req) {
    context.bindings.queue = {
        actualSettings: context.bindings.blobIn,
        name: req.query.name
    };
    context.res = {
        body: {
            status: "Response OK",
            name: req.query.name
        }
    }
};