const API_URL = "https://fakestoreapi.com"

/**
 * Simple API client for the Fake Store API
 */
export const api = {
  /**
   * Get all products
   * @returns {Promise<import('./types.js').Product[]>}
   */
  async getProducts() {
    const response = await fetch(`${API_URL}/products`)

    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }

    return response.json()
  },

  /**
   * Get a single product by ID
   * @param {string} id - Product ID
   * @returns {Promise<import('./types.js').Product>}
   */
  async getProduct(id) {
    const response = await fetch(`${API_URL}/products/${id}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch product with ID: ${id}`)
    }

    return response.json()
  },

  /**
   * Get products by category
   * @param {string} category - Category name
   * @returns {Promise<import('./types.js').Product[]>}
   */
  async getProductsByCategory(category) {
    const response = await fetch(`${API_URL}/products/category/${category}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch products in category: ${category}`)
    }

    return response.json()
  },
}
