module.exports = async function (context, req) {
    context.bindings.queue = {
        actualSettings: context.bindings.blobIn,
        name: req.query.name
    };
};