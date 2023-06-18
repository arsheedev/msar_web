'use client'

const DataChart = () => {
  const data: object = {
    labels: JSON.parse(localStorage.bulan),
    datasets: [
      {
        label: 'CAR',
        data: JSON.parse(localStorage.car),
        fill: false,
        borderColor: 'rgb(255, 0, 0)',
        tension: 0.1,
      },
      {
        label: 'Prediksi CAR',
        data: JSON.parse(localStorage.carp),
        fill: false,
        borderColor: 'rgb(0, 255, 0)',
        tension: 0.1,
      },
      {
        label: 'ROA',
        data: JSON.parse(localStorage.roa),
        fill: false,
        borderColor: 'rgb(0, 0, 255)',
        tension: 0.1,
      },
      {
        label: 'Prediksi ROA',
        data: JSON.parse(localStorage.roap),
        fill: false,
        borderColor: 'rgb(255, 255, 0)',
        tension: 0.1,
      },
      {
        label: 'NPF',
        data: JSON.parse(localStorage.npf),
        fill: false,
        borderColor: 'rgb(255, 165, 0)',
        tension: 0.1,
      },
      {
        label: 'Prediksi NPF',
        data: JSON.parse(localStorage.npfp),
        fill: false,
        borderColor: 'rgb(128, 0, 128)',
        tension: 0.1,
      },
      {
        label: 'NPF Net',
        data: JSON.parse(localStorage.net),
        fill: false,
        borderColor: 'rgb(255, 192, 203)',
        tension: 0.1,
      },
      {
        label: 'Prediksi NPF Net',
        data: JSON.parse(localStorage.netp),
        fill: false,
        borderColor: 'rgb(0, 128, 0)',
        tension: 0.1,
      },
      {
        label: 'FDR',
        data: JSON.parse(localStorage.fdr),
        fill: false,
        borderColor: 'rgb(135, 206, 235)',
        tension: 0.1,
      },
      {
        label: 'Prediksi FDR',
        data: JSON.parse(localStorage.fdrp),
        fill: false,
        borderColor: 'rgb(165, 42, 42)',
        tension: 0.1,
      },
      {
        label: 'BOPO',
        data: JSON.parse(localStorage.bopo),
        fill: false,
        borderColor: 'rgb(128, 128, 128)',
        tension: 0.1,
      },
      {
        label: 'Prediksi BOPO',
        data: JSON.parse(localStorage.bopop),
        fill: false,
        borderColor: 'rgb(0, 255, 255)',
        tension: 0.1,
      },
      {
        label: 'NOM',
        data: JSON.parse(localStorage.nom),
        fill: false,
        borderColor: 'rgb(255, 165, 0)',
        tension: 0.1,
      },
      {
        label: 'Prediksi NOM',
        data: JSON.parse(localStorage.nomp),
        fill: false,
        borderColor: 'rgb(238, 130, 238)',
        tension: 0.1,
      },
      {
        label: 'APYD Terhadap Aktiva Produktif',
        data: JSON.parse(localStorage.apyd),
        fill: false,
        borderColor: 'rgb(168, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Prediksi APYD Terhadap Aktiva Produktif',
        data: JSON.parse(localStorage.apydp),
        fill: false,
        borderColor: 'rgb(255, 253, 208)',
        tension: 0.1,
      },
      {
        label: 'Short Term Mistmach',
        data: JSON.parse(localStorage.stm),
        fill: false,
        borderColor: 'rgb(192, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Prediksi Short Term Mistmach',
        data: JSON.parse(localStorage.stmp),
        fill: false,
        borderColor: 'rgb(0, 0, 0)',
        tension: 0.1,
      },
    ],
  }

  return data
}

export default DataChart
