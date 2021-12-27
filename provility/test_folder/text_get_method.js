// $(document).ready(function () {
			
//     $('#ajaxBtn').click(function(){
       
//        $.get('/jquery/getjsondata', {name:'Steve'}, function (data,status,) {
//            $('p').append(data.firstName);
//        });
//    });
// });



// const employees = [[1,5,[2,3]],[2,3,[]],[3,3,[]]];
// const getImportance = (id, dtls) => {
//     const ids = [id];
//     const getDtl = y => dtls.find(x => x[0] === y);
//     const getValue = y => getDtl(y)[1];
//     const getChild = y => getDtl(y)[2];
//     const childs = getChild(id);
//     if (childs.length > 0) {
//         ids.push(...childs);
//     }
//     let total = 0;
//     console.log('ids', ids);
//     ids.forEach(i => {
//         total = total + getValue(i);
//     });
//     return total;
// };
// const result = getImportance(1, employees);
// console.log("getImportance", result);