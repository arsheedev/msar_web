const FetchData = async (valuesArray: any) => {
  const bulan = []
  const car = []
  const roa = []
  const npf = []
  const net = []
  const fdr = []
  const bopo = []
  const nom = []
  const apyd = []
  const stm = []

  // Destructure valuesArray
  const valuesArrayLength = valuesArray.length
  for (let i = 0; i < valuesArrayLength; i++) {
    bulan.push(valuesArray[i][0])
    car.push(valuesArray[i][1])
    roa.push(valuesArray[i][2])
    npf.push(valuesArray[i][3])
    net.push(valuesArray[i][4])
    fdr.push(valuesArray[i][5])
    bopo.push(valuesArray[i][6])
    nom.push(valuesArray[i][7])
    apyd.push(valuesArray[i][8])
    stm.push(valuesArray[i][9])
  }

  // Fetch data
  const data = { car, roa, npf, net, fdr, bopo, nom, apyd, stm }
  const fetchData = await fetch('http://localhost:8000/predict', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  })
  const res = await fetchData.json()

  // Save response data to localstorage
  localStorage.bulan = JSON.stringify(bulan)
  localStorage.car = JSON.stringify(car)
  localStorage.roa = JSON.stringify(roa)
  localStorage.npf = JSON.stringify(npf)
  localStorage.net = JSON.stringify(net)
  localStorage.fdr = JSON.stringify(fdr)
  localStorage.bopo = JSON.stringify(bopo)
  localStorage.nom = JSON.stringify(nom)
  localStorage.apyd = JSON.stringify(apyd)
  localStorage.stm = JSON.stringify(stm)
  localStorage.carp = JSON.stringify(res.car)
  localStorage.roap = JSON.stringify(res.roa)
  localStorage.npfp = JSON.stringify(res.npf)
  localStorage.netp = JSON.stringify(res.net)
  localStorage.fdrp = JSON.stringify(res.fdr)
  localStorage.bopop = JSON.stringify(res.bopo)
  localStorage.nomp = JSON.stringify(res.nom)
  localStorage.apydp = JSON.stringify(res.apyd)
  localStorage.stmp = JSON.stringify(res.stm)

  return true
}

export default FetchData
