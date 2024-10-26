function appTest(input) {
    let restaurants = {}
    input.forEach(line => {
        let separator = line.split(` - `)
        let name = separator[0];
        let workersArr = separator[1].split(`, `);
       
let workers=[];
for(let worker of workersArr){
    let workerTokens = worker.split(` `);
    let salary = Number(workerTokens[1])
    workers.push({ name:workerTokens[0], salary })
}
if (restaurants[name]){
    workers = workers.concat(restaurants[name].workers)
}
workers.sort((a,b)=>b.salary-a.salary);
let bestSalary=workers[0].salary;
let avgSalary = (workers.reduce((sum,worker)=>sum+worker.salary,0)/workers.length).toFixed(2)

restaurants[name]={
    avgSalary,
    bestSalary,
    workers,
}


})
console.log(restaurants);
}

appTest(["PizzaHut - Peter 500, George 300, Mark 800",
    "TheLake - Bob 1300, Joe 780, Jane 660"]);
