const API_BASE_URL = "http://192.168.15.15:3000"; 
// troque pelo IP do seu computador!

export async function getPedidos() {
  try {
    const response = await fetch(`${API_BASE_URL}/pedidos`);

    if (!response.ok) {
      throw new Error("Erro ao buscar dados da API");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}
