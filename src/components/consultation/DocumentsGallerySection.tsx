import { ImageIcon, FileImage, Download } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Foto, DocBase64 } from "@/types/consultation";

interface DocumentsGallerySectionProps {
  fotos?: Foto[];
  extraFotos?: Foto[];
  docsBase64?: DocBase64[];
}

export const DocumentsGallerySection = ({ fotos, extraFotos, docsBase64 }: DocumentsGallerySectionProps) => {
  // Combine all image sources
  const allFotos = [
    ...(fotos || []),
    ...(extraFotos || [])
  ].filter(f => f.foto);

  const allDocs = (docsBase64 || []).filter(d => d.base64 || d.url);

  const totalItems = allFotos.length + allDocs.length;
  
  if (totalItems === 0) return null;

  // Helper to get image source (handles both URLs and base64)
  const getImageSrc = (src?: string) => {
    if (!src) return undefined;
    // Check if it's already a data URL or starts with http
    if (src.startsWith('data:') || src.startsWith('http')) {
      return src;
    }
    // Assume it's base64 and add appropriate prefix
    // Try to detect image type from base64 signature
    if (src.startsWith('/9j/')) {
      return `data:image/jpeg;base64,${src}`;
    } else if (src.startsWith('iVBORw0KGgo')) {
      return `data:image/png;base64,${src}`;
    } else if (src.startsWith('R0lGOD')) {
      return `data:image/gif;base64,${src}`;
    }
    // Default to jpeg
    return `data:image/jpeg;base64,${src}`;
  };

  return (
    <SectionCard title="Fotos e Documentos" icon={ImageIcon} count={totalItems}>
      <div className="space-y-6">
        {/* Fotos */}
        {allFotos.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <FileImage className="w-4 h-4" /> Fotos ({allFotos.length})
            </h4>
            <div className="flex flex-wrap gap-3">
              {allFotos.map((foto, i) => (
                <div key={i} className="relative group">
                  <img 
                    src={getImageSrc(foto.foto)} 
                    alt={`Foto ${i + 1}`}
                    className="w-28 h-28 rounded-lg object-cover border-2 border-border shadow-md hover:shadow-lg transition-shadow print:w-24 print:h-24"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {foto.classificacao !== undefined && (
                    <span className="absolute bottom-1 right-1 text-[10px] bg-black/70 text-white px-1.5 py-0.5 rounded">
                      #{foto.classificacao}
                    </span>
                  )}
                  <a 
                    href={getImageSrc(foto.foto)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg no-print"
                  >
                    <Download className="w-6 h-6 text-white" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Documentos Base64 */}
        {allDocs.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <FileImage className="w-4 h-4" /> Documentos ({allDocs.length})
            </h4>
            <div className="flex flex-wrap gap-3">
              {allDocs.map((doc, i) => {
                const imgSrc = doc.url || getImageSrc(doc.base64);
                return (
                  <div key={i} className="relative group">
                    <div className="w-32 bg-secondary/50 rounded-lg border border-border overflow-hidden">
                      <img 
                        src={imgSrc} 
                        alt={doc.descricao || `Documento ${i + 1}`}
                        className="w-full h-24 object-cover"
                        onError={(e) => {
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-24 flex items-center justify-center bg-muted">
                                <span class="text-xs text-muted-foreground">Imagem indisponível</span>
                              </div>
                            `;
                          }
                        }}
                      />
                      <div className="p-2">
                        <p className="text-xs font-medium text-foreground truncate">
                          {doc.tipo || doc.descricao || `Doc ${i + 1}`}
                        </p>
                        {doc.dataEmissao && (
                          <p className="text-[10px] text-muted-foreground">{doc.dataEmissao}</p>
                        )}
                      </div>
                    </div>
                    <a 
                      href={imgSrc} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      download
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg no-print"
                    >
                      <Download className="w-6 h-6 text-white" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </SectionCard>
  );
};
