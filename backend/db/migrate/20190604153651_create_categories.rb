class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :slug
      t.string :parent_slug

      t.timestamps
    end
  end
end
