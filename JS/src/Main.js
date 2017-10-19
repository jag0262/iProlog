(function Main(){
    function println(o){
        console.log(o);
    }

    function pp(o){
        console.log(o);
    }

    function run (fname0){
        var p = true;

        var fname = fname0 + ".nl";
        //instantiating necessary?
        //var P = new Engine();
        
        if(p){
            P = new Prog(fname);
            pp("CODE");
            //type casting?
            //((Prog) P).ppCode();
        } else {
            P = new Enging(fname);
        }

        pp("RUNNNING");
        var t1 = new Date().getTime();
        P.run();
        var t2 = new Date().getTime();
        console.log("time=" + (t2-t1) / 1000);
    }

    function srun (fname0){
        var fname = fname0 + ".nl";
        var P = new Prog(fname);

        pp("CODE");
        P.ppCode();

        pp("RUNNING");
        var t1 = new Date().getTime();

        var S = P.stream();
        S.forEach(x => Main.pp(P.showTerm(x)));

        var t2 = new Date().getTime();
        console.log("time="+ (t2-t1) / 1000);
    }

    function main (args){
        var fname=args[0];
        run(fname);
    }
})();