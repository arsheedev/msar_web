from pydantic import BaseModel
from typing import List

class DataModel(BaseModel):
    car: List[float]
    roa: List[float]
    npf: List[float]
    net: List[float]
    fdr: List[float]
    bopo: List[float]
    nom: List[float]
    apyd: List[float]
    stm: List[float]