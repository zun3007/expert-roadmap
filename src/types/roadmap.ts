/**
 * Represents a single item in the learning roadmap.
 * Items can be nested to create a hierarchical structure up to 3 levels deep.
 */
export interface Resource {
  title: string;
  url: string;
  type: 'video' | 'book' | 'documentation' | 'link';
}

export interface RoadmapItem {
  /** Unique identifier for the item, format: '1' for main categories, '1.1' for subcategories, '1.1.1' for specific skills */
  id: string;

  /** Title of the roadmap item */
  title: string;

  /** Detailed description of what this item covers */
  description: string;

  /** Category/topic area this item belongs to (e.g., 'Mathematics', 'Programming', etc.) */
  category: string;

  /** Whether this item has been completed by the user */
  completed: boolean;

  /** The difficulty level of this item */
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

  /** Optional array of sub-items for creating nested structures */
  subItems?: RoadmapItem[];

  /** Optional estimated time to complete (in hours) */
  estimatedTime?: number;

  /** Optional array of resource links for learning */
  resources?: Resource[];

  /** Optional prerequisites - IDs of items that should be completed first */
  prerequisites?: string[];

  /** Optional skills that will be gained */
  skills?: string[];
}
