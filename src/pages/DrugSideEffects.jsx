import EmbeddingScatter from '../components/EmbeddingScatter'
import ClusterMap from '../components/ClusterMap'
import ClusterKeywords from '../components/ClusterKeywords'
import '../styles/drug-side-effects.css'

export default function DrugSideEffects() {
  return (
    <div className="case-study">
      <div className="container">
        {/* Header */}
        <div className="case-study-header">
          <h1>Drug Side Effects &mdash; NLP Clustering Analysis</h1>
          <p className="case-study-subtitle">
            Unsupervised Learning &middot; QTM 340 &middot; Emory University
          </p>
          <div className="case-study-meta">
            {['Python', 'NLP', 'DBSCAN', 'TF-IDF', 'scikit-learn', 'Agglomerative Clustering'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="case-study-section">
          <h2>Overview</h2>
          <p>
            Unsupervised clustering on 2,900+ drugs from Drugs.com reveals that pharmacological
            similarity is not captured by drug names or medical conditions, but by shared side
            effect patterns. The central finding: clustering performance is driven by
            representation, not algorithm choice. When drugs are represented by their adverse
            effect profiles, clear and medically meaningful structure emerges from the data.
          </p>
        </div>

        {/* Core Problem */}
        <div className="case-study-section">
          <h2>The Core Problem</h2>
          <p>
            The dataset contains nearly 3,000 drugs, each associated with a medical condition,
            a generic name, and a block of free-text side effects. The question is
            straightforward: can unsupervised clustering surface meaningful drug groupings
            without any predefined pharmacological labels?
          </p>
          <p>
            The naive approach is to cluster drugs by name similarity or by which conditions
            they treat. Both fail &mdash; for different reasons. Name-based similarity captures
            spelling, not pharmacology. Condition-based features are too coarse: with only 47
            unique conditions across a thousand drugs, most distances collapse to near-zero.
          </p>
          <p className="case-study-callout">
            Without a meaningful representation, clustering produces either noise or trivial
            groupings &mdash; making unsupervised methods appear ineffective when the real
            issue is feature design.
          </p>
        </div>

        {/* Iterative Exploration */}
        <div className="case-study-section">
          <h2>Iterative Exploration</h2>
          <p>
            Five approaches were tested sequentially, each shifting the feature space.
            The failures are as instructive as the final result.
          </p>

          <div className="approach-timeline">
            {/* Attempt 1 */}
            <div className="approach-item">
              <div className="approach-marker">
                <div className="approach-dot approach-dot--fail" />
                <div className="approach-line" />
              </div>
              <div className="approach-content">
                <h4>Name Similarity &mdash; MinHash LSH</h4>
                <p>
                  Character n-gram shingling with Jaccard similarity at threshold 0.3.
                  Produces 355 clusters &mdash; almost all noise. Combination drugs with
                  shared ingredient substrings cluster together regardless of therapeutic
                  function. The representation captures spelling, not pharmacology.
                </p>
                <span className="approach-verdict approach-verdict--fail">355 clusters &middot; noise</span>
              </div>
            </div>

            {/* Attempt 2 */}
            <div className="approach-item">
              <div className="approach-marker">
                <div className="approach-dot approach-dot--fail" />
                <div className="approach-line" />
              </div>
              <div className="approach-content">
                <h4>Condition Matrix &mdash; Agglomerative Clustering</h4>
                <p>
                  Binary drug &times; condition matrix (1,005 &times; 47) with cosine
                  distance and average linkage. The feature space is too low-dimensional.
                  Most drugs map to common conditions like &ldquo;pain&rdquo; or
                  &ldquo;hypertension,&rdquo; so the distance space has no resolution
                  between them.
                </p>
                <span className="approach-verdict approach-verdict--fail">k=40 &middot; no separation</span>
              </div>
            </div>

            {/* Attempt 3 */}
            <div className="approach-item">
              <div className="approach-marker">
                <div className="approach-dot approach-dot--fail" />
                <div className="approach-line" />
              </div>
              <div className="approach-content">
                <h4>Combined Features &mdash; Conditions + Side Effects</h4>
                <p>
                  Merging conditions and side effects into one feature set, hoping
                  for richer signal. Still dominated by the condition dimension &mdash;
                  Cluster 0 absorbs 875 of 1,005 drugs. The condition features
                  drown out the side effect signal.
                </p>
                <span className="approach-verdict approach-verdict--fail">875/1005 in one cluster</span>
              </div>
            </div>

            {/* Attempt 4 */}
            <div className="approach-item">
              <div className="approach-marker">
                <div className="approach-dot approach-dot--fail" />
                <div className="approach-line" />
              </div>
              <div className="approach-content">
                <h4>Side Effects Only &mdash; Agglomerative, Cosine</h4>
                <p>
                  Stripping conditions entirely. Using MultiLabelBinarizer on tokenized
                  side effect sets. This produces interpretable clusters for the first
                  time &mdash; but agglomerative clustering with a fixed distance
                  threshold cannot handle the varying density across drug groups.
                </p>
                <span className="approach-verdict approach-verdict--partial">interpretable but uneven</span>
              </div>
            </div>

            {/* Attempt 5 */}
            <div className="approach-item">
              <div className="approach-marker">
                <div className="approach-dot approach-dot--success" />
              </div>
              <div className="approach-content">
                <h4>Side Effects + Conditions &mdash; DBSCAN, Jaccard</h4>
                <p>
                  Reintroducing conditions as a secondary signal alongside side effects,
                  switching to DBSCAN with Jaccard distance. Jaccard respects the binary,
                  set-like nature of the features. DBSCAN handles variable density and
                  isolates noise drugs that don&rsquo;t belong anywhere.
                  This is where the structure emerges.
                </p>
                <span className="approach-verdict approach-verdict--success">41 clusters &middot; medically coherent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Breakthrough */}
        <div className="case-study-section">
          <h2>The Breakthrough</h2>
          <p>
            The turning point was recognizing that side effect profiles encode
            pharmacological mechanism more faithfully than any other available signal.
            Drugs that act on the same biological pathways tend to produce the same
            adverse effects &mdash; even when prescribed for entirely different conditions.
          </p>
          <p>
            Tokenizing the free-text side effects, binarizing them per drug, and measuring
            Jaccard similarity captures this directly. DBSCAN succeeds because it does not
            force every drug into a cluster. Drugs with unique or poorly documented side
            effect profiles become noise rather than contaminating a real group.
          </p>

          <EmbeddingScatter />
          <p className="dashboard-caption">
            Synthetic projection of drug similarity in 2D space. Clusters correspond
            to shared adverse effect profiles, not predefined drug categories.
          </p>
        </div>

        {/* Results */}
        <div className="case-study-section">
          <h2>Results</h2>
          <div className="results-stats">
            <div className="results-stat">
              <div className="results-stat-value results-stat-value--accent">41</div>
              <div className="results-stat-label">
                Distinct clusters identified from DBSCAN on combined features
              </div>
            </div>
            <div className="results-stat">
              <div className="results-stat-value results-stat-value--green">2,900+</div>
              <div className="results-stat-label">
                Drugs analyzed from Drugs.com with side effect text
              </div>
            </div>
            <div className="results-stat">
              <div className="results-stat-value results-stat-value--purple">Jaccard</div>
              <div className="results-stat-label">
                Distance metric on binarized side effect profiles
              </div>
            </div>
          </div>

          <p>
            The 41 clusters are not just statistically tight &mdash; they correspond
            to recognized drug classes, discovered purely from adverse effect text
            without any pharmacological labels as input.
          </p>

          <ClusterMap />
          <p className="dashboard-caption">
            Cluster separation in projected space. Each group shares a distinct
            side effect signature. Boundaries are approximate.
          </p>
        </div>

        {/* Cluster Keywords */}
        <div className="case-study-section">
          <h2>What the Clusters Reveal</h2>
          <p>
            Each cluster carries a distinct side effect fingerprint that maps to
            a recognized pharmacological category. The clustering recovers drug
            class structure without ever being told what a drug class is.
          </p>

          <ClusterKeywords />
        </div>

        {/* Key Insight */}
        <div className="case-study-section">
          <h2>Key Insight</h2>
          <p>
            The same dataset can produce either 355 meaningless clusters or 41
            interpretable ones &mdash; depending entirely on how the data is represented.
          </p>
          <p>
            Side effects capture pharmacological similarity better than drug names
            or condition labels because they reflect mechanism of action. Two drugs
            prescribed for entirely different conditions can share a side effect profile
            if they act on the same receptor pathway. This is invisible in condition-based
            or name-based representations, but it emerges clearly when the feature space
            is built from adverse effect text.
          </p>
          <p className="case-study-callout">
            In unsupervised learning, the feature space determines whether
            structure is revealed or obscured.
          </p>
        </div>

        {/* Reflection */}
        <div className="case-study-section">
          <h2>Reflection</h2>
          <p>
            This project highlights a recurring pattern in applied machine learning:
            model choice matters far less than whether the data representation captures
            the underlying structure.
          </p>
          <p>
            In practice, the most impactful improvement did not come from tuning
            algorithms, but from redefining what similarity means in the problem
            space. The order-of-magnitude jump in clustering quality came from changing
            what the model sees, not how it groups.
          </p>
        </div>

        {/* Reconstruction Note */}
        <div className="reconstruction-note">
          <p>
            Visualizations on this page use synthetic data to illustrate the analysis
            structure. Cluster compositions and side effect associations reflect patterns
            from the original analysis on the Drugs.com dataset.
          </p>
        </div>
      </div>
    </div>
  )
}
