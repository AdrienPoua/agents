import XLSX from 'xlsx';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Exporte des données vers un fichier Excel
 * @param data - Tableau d'objets à exporter
 * @param filename - Nom du fichier (sans extension)
 * @param sheetName - Nom de la feuille (optionnel)
 */
export function exportToExcel(
  data: Record<string, any>[],
  filename: string,
  sheetName: string = 'Données'
): string {
  try {
    // Créer un nouveau workbook
    const workbook = XLSX.utils.book_new();

    // Convertir les données en feuille de calcul
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Ajouter la feuille au workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    // Définir le chemin de sortie
    const outputPath = path.join(__dirname, '..', '..', 'output', `${filename}.xlsx`);

    // Écrire le fichier
    XLSX.writeFile(workbook, outputPath);

    console.log(`✓ Fichier Excel créé: ${outputPath}`);
    return outputPath;
  } catch (error) {
    console.error('Erreur lors de la création du fichier Excel:', error);
    throw error;
  }
}

/**
 * Exporte plusieurs feuilles dans un seul fichier Excel
 * @param sheets - Objet où les clés sont les noms des feuilles et les valeurs sont les données
 * @param filename - Nom du fichier (sans extension)
 */
export function exportMultipleSheetsToExcel(
  sheets: Record<string, Record<string, any>[]>,
  filename: string
): string {
  try {
    const workbook = XLSX.utils.book_new();

    for (const [sheetName, data] of Object.entries(sheets)) {
      const worksheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    }

    const outputPath = path.join(__dirname, '..', '..', 'output', `${filename}.xlsx`);
    XLSX.writeFile(workbook, outputPath);

    console.log(`✓ Fichier Excel créé avec ${Object.keys(sheets).length} feuilles: ${outputPath}`);
    return outputPath;
  } catch (error) {
    console.error('Erreur lors de la création du fichier Excel:', error);
    throw error;
  }
}
