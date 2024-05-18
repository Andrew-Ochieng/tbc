const Give = () => {
    return ( 
        <div className="md:p-12 p-8">
            <div className="grid sm:grid-cols-2 my-8">
                <img className="shadow-xl " src="saf.png" alt="" />
                <div>
                    <h2 className="text-4xl font-black mb-4">GIVING</h2>
                    <p>You can give through our Mpesa paybill.</p>
                </div>
            </div>  
            <div className="grid sm:grid-cols-2 my-8">
                <img className="shadow-xl md:h-80 h-48" src="mpesa-logo.png" alt="" />
                <div >
                    <h2 className="text-4xl font-black mb-4">LIPA NA MPESA</h2>
                    <p className="list-decimal">
                        <li>Go to mpesa</li>
                        <li>Lipa na mpesa</li>
                        <li>Paybill no: 5 1 2 5 1 2</li>
                        <li>Account no: XXXXXXXXXXX</li>
                    </p>
                </div>
            </div> 
        </div>
     );
}
 
export default Give;