import { useState } from 'react';

export const useTagSelection = (data) => {
  const [selectedTags, setSelectedTags] = useState(
    data['selected tags'].split(', ').filter(Boolean)
  );
  const allTags = data['select tags'].split(', ');

  const handleTagSelect = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return { selectedTags, allTags, handleTagSelect };
};
