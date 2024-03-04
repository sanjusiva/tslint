module.exports={
    create(context:any){
        return{
            CallExpression(node:any){
                if(node.callee.name==='creatingDummy'){
                    context.report({
                        node:node,
                        message:"Don't use this method it is illegal"
                    });
                }
            }
        }
    }

}